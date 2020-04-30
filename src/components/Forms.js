import React, { useState } from "react";
import Form from "./shared/Form";
import SelectBox from "./shared/SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import { mentors, groups, status } from "./mock/option";

const Forms = () => {
  return (
    <React.Fragment>
      <Title name="Form" />
      <form className="mx-8">
        <p className="mt-8 font-bold">ข้อมูลทั่วไป</p>
        <div className="flex flex-wrap mb-6 mt-3">
          <Form label="ชื่อต้น" test="อามมี่" type="text" />
          <Form label="นามสกุล" test="inw" type="text" />
          <Form label="ชื่อเล่น" test="ทดลอง" type="text" />
          <Form label="อายุ" test="18" type="number" />
        </div>
        <div className="flex flex-wrap  mb-6 mt-3">
          <Form label="facebook" test="facebook/abc" type="text" />
          <Form label="เบอร์มือถือ" test="0935888" type="number" />
          <Form label="ที่อยู่" test="กะทู้แลน" type="text" />
          <Form label="ความสามารถพิเศษ" test="ว่ายน้ำกลับหัว" type="text" />
        </div>
        <p className="mt-8 font-bold">ข้อมูลฝ่ายวิญญาณ</p>
        <div className="flex flex-wrap  mb-2">
          <SelectBox label="พี่เลี้ยง" test={mentors} />
          <SelectBox label="กลุ่มแคร์" test={groups} />
          <SelectBox label="ระดับความเชื่อ" test={status} />
          <DateForm label="วันที่เชื่อ" />
        </div>
        <p className="mt-8 font-bold">ข้อมูลอาชีพ</p>
        <div className="flex flex-wrap  mb-2">
          <Form label="อาชีพ" test="คนขายยา" type="text" />
          <Form label="รายได้" test="100000" type="number" />
          <Form label="ทำที่ไหน" test="ไม่บอกหรอก ฮิฮิ" type="text" />
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/5 px-3 md:mb-0 mt-3">
            <button className="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              เคลียร์ข้อมูล
            </button> {" "}
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              เพิ่มข้อมูล
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forms;
