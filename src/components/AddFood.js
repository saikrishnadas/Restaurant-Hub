import React, { useState } from "react";
import { Button, Modal, Form, Input, InputNumber, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const AddFood = ({ isAddModal, handleOk, handleCancel }) => {
	const fileList = [
		{
			uid: "0",
			name: "xxx.png",
			status: "uploading",
			percent: 33,
		},
		{
			uid: "-1",
			name: "yyy.png",
			status: "done",
			url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
			thumbUrl:
				"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		},
		{
			uid: "-2",
			name: "zzz.png",
			status: "error",
		},
	];

	const modalOk = () => {
		onFinish();
		handleOk();
	};
	const onFinish = (values) => {
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	return (
		<>
			<Modal
				title="Add New Food Item"
				open={isAddModal}
				// onOk={modalOk}
				onCancel={handleCancel}
				footer={null}
			>
				<Form
					name="addItem"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Title"
						name="title"
						rules={[
							{
								required: true,
								message: "Please enter the food title!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Description"
						name="description"
						rules={[
							{
								required: true,
								message: "Please enter food description!",
							},
						]}
					>
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item
						label="Price"
						name="price"
						rules={[
							{
								required: true,
								message: "Please enter price!",
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 20,
							span: 16,
						}}
					>
						<Button type="primary" htmlType="submit">
							Save
						</Button>
					</Form.Item>
				</Form>
				<Upload
					action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					listType="picture"
					defaultFileList={[...fileList]}
				>
					<Button icon={<UploadOutlined />}>Upload</Button>
				</Upload>
			</Modal>
		</>
	);
};
export default AddFood;
