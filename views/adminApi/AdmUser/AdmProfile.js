import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AdmPageContent } from '../admLayout';
import { Tile, TileBody, TileObject, TileName, TileNumber} from '../../styles/Tile';

export const AdmProfile = (props) =>(

	<AdmPageContent>
		administration profile

		<Tile>
            <TileBody>
                <i className="fa fa-calendar"></i>
            </TileBody>
            <TileObject>
                <TileName> Administration </TileName>
                <TileNumber> 12 </TileNumber>
            </TileObject>
        </Tile>
        <Tile bg="#36D7B7">
        <Link to={'/khmmamed/eLab/tests'}>
            <TileBody>
                <i className="fa fa-calendar"></i>
            </TileBody>
        </Link>
            <TileObject>
                <TileName> eLab </TileName>
                <TileNumber> 12 </TileNumber>
            </TileObject>
        </Tile>


	</AdmPageContent>
)