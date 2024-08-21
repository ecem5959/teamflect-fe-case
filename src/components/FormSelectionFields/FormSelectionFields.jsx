import './formSelectionFields.scss';
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDateInput from "../CustomDateInput/CustomDateInput";

const users = [
    { id: 1, name: 'Adele Vance', avatar: '/public/mock-image.png' },
    { id: 2, name: 'Alex Wilber', avatar: '/public/mock-image.png' },
    { id: 3, name: 'Patti Fernandes', avatar: '/public/mock-image.png' },
    { id: 4, name: 'Grady Archie', avatar: '/public/mock-image.png' },
    { id: 5, name: 'Isaiah Langer', avatar: '/public/mock-image.png' },
    { id: 6, name: 'Isaiah Langer', avatar: '/public/mock-image.png' },
    { id: 7, name: 'Isaiah Langer', avatar: '/public/mock-image.png' },
];

const progress = [
    { id: 11, name: '%30' },
    { id: 21, name: '%50' },
    { id: 31, name: '%70'},

];

const parentGoal = [
    { id: 110, name: 'Improve Efficiency' },
    { id: 210, name: 'Improve Efficiency' },
];
const FormSelectionFields = () => {
    return <div className="selectionFields">
        <CustomSelect label="Goal owner" options={users} showImage/>
        <CustomDateInput label="Start date"/>
        <CustomSelect label="Parent goal" options={parentGoal}/>
        <CustomSelect label="Progress" options={progress}/>
    </div>
}

export default FormSelectionFields;