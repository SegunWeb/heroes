import React from 'react';
import Card from "../components/Card";
import "./cardList.css";
import "../../../fonts/fonts.css";


const CardList = ({ dc }) => {

        return (
            <div className="did tc">
                <h1>Heroes marvel</h1>

                {
                    dc.map((user, i) => {
                        return (
                            <Card
                                key={i}
                                id={dc[i].id}
                                name={dc[i].name}
                                imges={dc[i].imges}
                                history={dc[i].history}
                            />
                        )
                    })
                }
            </div>
        )
};

export default CardList