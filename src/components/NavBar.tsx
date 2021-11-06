import React, { MouseEvent, useState } from "react";
import { Menu } from "semantic-ui-react";

export default function NavBar() {
    const [ activeItem, setActiveItem] = useState<string>('home')

    function handleItemClick (e: MouseEvent) {
        const target=e.target as HTMLAnchorElement;
        setActiveItem(target.id)
    }

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            id='home'
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          
        </Menu>
      </div>
    )
}