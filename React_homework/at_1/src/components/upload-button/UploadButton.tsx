import React from 'react';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

interface IUploadButtonProps {
  loading: boolean;
}

function UploadButton({loading}: IUploadButtonProps) {
  return (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );
}

export default UploadButton;
