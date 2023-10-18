import { Forms } from '@/components'
import Image from 'next/image'

const formElements = [
  {
    type: "formHeader",
    style: "header",
    imgStyle: "type1",
    text: "Add new service",
    img: "/images/form.png",
    id: "1",
  },
  {
    type: "textInput",
    style: "textInput2",
    name: "",
    placeholder: "Text",
    id: "2",
  },
  {
    type: "textInput",
    style: "textInput2",
    name: "",
    placeholder: "Priority",
    id: "3",
  },
  {
    type: "textInput",
    style: "textInput2",
    name: "",
    placeholder: "Status",
    id: "4",
  },
  {
    type: "submitBtn",
    style: "submitBtn2",
    name: "",
    label: "Save",
    id: "5",
  },
];
const formStyle = "type2";

export default function Home() {
  return (
    <main className="">
      <div className='w-full flex flex-col px-12 mt-20 '>
        <Forms formElements={formElements} formStyle={formStyle}/>
      </div>
    </main>
  )
}
