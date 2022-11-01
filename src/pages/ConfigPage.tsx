
import React, { useState } from "react";
import ACL from "../components/ACL";
import Crud from "../components/Crud";
import Menu from "../components/Menu";
import { UserSchema } from "../schemas/users.schema";

const ConfigPage: React.FC = () => {
    const [active, setActive] = useState(0);
    const items = ['ACL', 'Users', 'Groups', 'Rules'];
    const elements: any = {
        0: () => <ACL />,
        1: () => <Crud schema={UserSchema} />,
        2: () => <>Hola mundo2</>,
        3: () => <>Hola mundo3</>,
    }
    return (
        <div>
            <Menu
                active={active} 
                items={items}
                onChange={(item) => setActive(item)}>
                {elements[active]()}
            </Menu>
        </div>
    );
}

export default ConfigPage;
