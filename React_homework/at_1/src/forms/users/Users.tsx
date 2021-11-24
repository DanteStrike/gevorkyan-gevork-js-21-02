import React from 'react';
import ContentLayout, {ContentLayoutType} from "../../components/content-layout/ContentLayout";
import List from "../../components/list/List";
import Card from "../../components/card/Card";

function Users() {
  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <List dataSource={[1, 2, 3, 4, 5, 6]} renderItem={((el) => (
        <List.Item key={el}>
          <Card/>
        </List.Item>
      ))}/>
    </ContentLayout>
  );
};

export default Users;
