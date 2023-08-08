import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import InitialItems from '../data/InitialItems';
import '../index.css';

export default function App() {
    const [items, setItems] = useState(InitialItems);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleUpdateItem(id) {
        setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
    }

    function handleClearList() {
        const confirmedClear = window.confirm('Are you sure you want to delete all items?');

        if (confirmedClear) setItems([]);
    }

    return (
        <div className='app'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onClearList={handleClearList} />
            <Stats items={items} />
        </div>
    );
}
