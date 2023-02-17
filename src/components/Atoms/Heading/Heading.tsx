
type props = {
    text: string;
} 

export default function Heading({text}: props) {
    return (
        <h2 className="text-marks-600 text-3xl font-semibold my-5 border-b-2 border-gray-300 box-border w-fit">{text}</h2>
    )


}