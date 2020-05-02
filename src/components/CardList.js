import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    console.log("CardList")
    
        const cardComponent = robots.map((user, i) => {
                return ( < Card key = { robots[i].id }
                    id = { robots[i].id }
                    name = { robots[i].name }
                    email = { robots[i].email }
                    />);
                });
            return ( <div > { cardComponent }  </div>
            );
        }

        export default CardList;