import React from 'react';
import {Button, Form, Input} from "antd";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
        <h1 className={styles.app__title}>Text editor</h1>
        <div>
          <Form>
            <Form.Item>
              <Input.TextArea allowClear showCount autoSize={{minRows: 6, maxRows: 6}} maxLength={400}/>
            </Form.Item>
            <Form.Item>
              <Button className={styles.app__save} type="primary" htmlType="submit" title="Save">Save</Button>
            </Form.Item>
          </Form>
        </div>
    </div>
  );
}

export default App;
