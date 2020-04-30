import React, { useState } from "react";
import Form from "./shared/Form";
import SelectBox from "./SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import { mentors, groups, status } from "./data";

const Forms = () => {
  return (
    <React.Fragment>
      <Title name="Form" />
      <form class="mb-5">
        <div class="flex flex-wrap mb-6 mt-3">
          <Form label="ชื่อต้น" test="อามมี่" type="text" />
          <Form label="นามสกุล" test="inw" type="text" />
          <Form label="ชื่อเล่น" test="ทดลอง" type="text" />
          <Form label="อายุ" test="18" type="number" />
        </div>
        <div class="flex flex-wrap  mb-6 mt-3">
          <Form label="facebook" test="facebook/abc" type="text" />
          <Form label="เบอร์มือถือ" test="0935888" type="number" />
          <Form label="ที่อยู่" test="กะทู้แลน" type="text" />
          <Form label="ความสามารถพิเศษ" test="ว่ายน้ำกลับหัว" type="text" />
        </div>
        <div class="flex flex-wrap  mb-2">
          <SelectBox label="พี่เลี้ยง" test={mentors} />
          <SelectBox label="กลุ่มแคร์" test={groups} />
          <SelectBox label="ระดับความเชื่อ" test={status} />
          <DateForm label="วันที่เชื่อ" />
        </div>
        <div class="flex flex-wrap  mb-2">
          <Form label="อาชีพ" test="คนขายยา" type="text" />
          <Form label="รายได้" test="100000" type="number" />
          <Form label="ทำที่ไหน" test="ไม่บอกหรอก ฮิฮิ" type="text" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forms;
