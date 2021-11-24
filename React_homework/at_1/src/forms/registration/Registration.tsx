import React from 'react';
import RegForm from '../../components/reg-form/RegForm';
import ContentLayout, {ContentLayoutType} from "../../components/content-layout/ContentLayout";

function Registration() {
  return (
    <ContentLayout type={ContentLayoutType.SINGLE} title="Регистрация">
      <RegForm />
    </ContentLayout>
  );
}

export default React.memo(Registration);
