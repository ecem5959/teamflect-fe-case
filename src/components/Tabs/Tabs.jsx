import {useState} from "react";
import Tree from "../Icons/Tree";
import List from "../Icons/List";
import './tabs.scss';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const tabData = [
        {
            icon: (color) => <Tree color={color}/>,
            label: 'Tree'
        },
        {
            icon: (color) => <List color={color}/>,
            label: 'List'
        }
    ]

    return <div className="tabs">
        {tabData.map((tab, index) => {
            const isActive = index === activeTab;
            const color = isActive ? '#1053FF' : '#000000'

            return <div key={tab.label} className={`tabsItem ${isActive ? 'active' : ''}`} onClick={() => setActiveTab(index)} >
                {tab.icon(color)}
                <span className={`${isActive ? 'active' : ''}`}>{tab.label}</span>
            </div>
        })}
    </div>;
};

export default Tabs;