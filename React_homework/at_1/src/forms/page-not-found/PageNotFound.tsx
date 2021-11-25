import React from 'react';
import ContentLayout, {ContentLayoutType} from "../../components/content-layout/ContentLayout";

function PageNotFound() {
  return (
    <ContentLayout type={ContentLayoutType.CONTENT} title="Error: 404">
      <p>Стрница не найдена</p>
    </ContentLayout>
  );
}

export default PageNotFound;
