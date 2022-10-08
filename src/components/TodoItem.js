import React from 'react'
import { useDispatch } from 'react-redux'
import { toogleComplete, removeTodo } from '../redux/reducers/todoSlice'

const TodoItem = ({ id, title, completed }) => {

	const dispatch = useDispatch()

	const handleCheckboxClick = () => {
		dispatch(toogleComplete({ id, completed: !completed }))
	}

	const handleRemoveTodo = () => {
		dispatch(removeTodo({ id }))
	}

	return (
		<li className={ `list-group-item ${completed && 'list-group-item-success'}` }>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={ completed }
						onClick={ handleCheckboxClick }
					>
					</input>
					{ title }
				</span>
				<button
					className='btn btn-danger'
					onClick={ handleRemoveTodo }
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;