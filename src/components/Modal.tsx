import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Table } from "../components/Table";
import { Form } from "../components/Form";

export const Modal = ({ onCloseModal, context }) => {
    console.log('modal',context)

  return (
    <div className="modal">
      <div style={{marginTop: '15px', marginLeft: '15px'}}>
        <Tabs>
          <TabList>
            <Tab>Owners</Tab>
            <Tab>Add/Edit Owner</Tab>
          </TabList>

          <TabPanel>
            <Table owners={context.owners}/>
          </TabPanel>
          <TabPanel>
            <Form />
          </TabPanel>
        </Tabs>
      </div>
      <button className="modal-btn-close" onClick={onCloseModal}>
        Close
      </button>
    </div>
  );
};
