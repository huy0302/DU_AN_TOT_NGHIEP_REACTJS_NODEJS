import React, { useEffect, useState } from "react";
import { StarOutlined } from '@ant-design/icons'


export const StarIcons = ( props ) =>
{
	const [ voteNumber, setVoteNumber ] = useState( 0 );
	const [ number, setNumber ] = useState( 0 );
	useEffect( () =>
	{
		if ( props.vote_number )
		{
			setVoteNumber( props.vote_number )
		}
	}, [ props.vote_number ] );


	return (
		<div className="review-star-icon">
			{
				[ ...Array( 5 ) ].map( ( item, index ) =>
				{
					if ( index < voteNumber )
					{
						return (
							<StarOutlined key={ index }
								className={ `star active ${ index > 0 ? 'ml-2' : '' }` }
								onClick={ () =>
								{
									if ( props.is_form )
									{
										props.setVoteNumber( index + 1 )
									}

								} }
							/>
						);
					}
					return (
						<StarOutlined key={ index }
							className={ `star ${ index > 0 ? 'ml-2' : '' }` }
							onClick={ () =>
							{
								if ( props.is_form )
								{
									props.setVoteNumber( index + 1 )
								}

							} }
						/>
					);
				} )
			}
		</div>
	);
};
