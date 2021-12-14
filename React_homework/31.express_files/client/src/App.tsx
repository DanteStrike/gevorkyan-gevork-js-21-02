import React, {useCallback, useEffect} from 'react';
import {Button, Form, Input, message} from 'antd';
import styles from './App.module.css';
import useFileAPI, {Status} from './hooks/useFileAPI';

interface ITextForm {
  file: string;
}

function App() {
  const [form] = Form.useForm();
  const {status, data, errMsg, saveFile, loadFile} = useFileAPI();

  const handleFormFinish = useCallback(
    (filedValues: ITextForm) => {
      saveFile(filedValues);
    },
    [saveFile]
  );

  useEffect(() => {
    loadFile();
  }, [loadFile]);

  useEffect(() => {
    if (data !== ``) {
      form.setFieldsValue({file: data});
    }
  }, [form, data]);

  useEffect(() => {
    if (errMsg !== ``) {
      message.error(errMsg);
    }
  }, [errMsg]);

  return (
    <div className={styles.app}>
      <h1 className={styles.app__title}>Text editor</h1>
      <div>
        <Form form={form} name="text-form" onFinish={handleFormFinish}>
          <Form.Item name="file">
            <Input.TextArea
              allowClear
              showCount
              autoSize={{minRows: 6, maxRows: 6}}
              maxLength={400}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.app__save}
              type="primary"
              htmlType="submit"
              title="Save"
              loading={status === Status.LOADING}
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default App;
