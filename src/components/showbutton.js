// src/components/Header.js
import React from 'react';
import Button from './button'; // Updated import statement

const Buttonshow = () => {
    return (
        <div>
            <div className="mb-4">
                <Button type="primary" className="rounded">Primary</Button>
            </div>
            <div className="mb-4">
                <Button type="secondary" className="rounded">Secondary</Button>
            </div>
            <div className="mb-4">
                <Button type="accent" className="rounded">Accent</Button>
            </div>
            <div className="mb-4">
                <Button type="danger" className="rounded">Danger</Button>
            </div>
            <div className="mb-4">
                <Button type="success" className="rounded">Success</Button>
            </div>
            <div className="mb-4">
                <Button type="info" className="rounded">Info</Button>
            </div>
            <div className="mb-4">
                <Button type="outline" className="rounded">Outline</Button>
            </div>
            <div className="mb-4">
                <Button type="link" className="rounded">Link</Button>
            </div>
            <div className="mb-4">
                <Button type="disabled" className="rounded" disabled>Disabled</Button>
            </div>
            <div className="mb-4">
                <Button type="small" className="rounded">Small</Button>
            </div>
            <div className="mb-4">
                <Button type="large" className="rounded">Large</Button>
            </div>
            <div className="mb-4">
                <Button type="rounded">Rounded</Button>
            </div>
            <div className="mb-4">
                <Button type="square">Square</Button>
            </div>
            <div className="mb-4">
                <Button type="soft" className="rounded">Soft</Button>
            </div>
            <div className="mb-4">
                <Button type="softOutline" className="rounded">Soft Outline</Button>
            </div>
            <div className="mb-4">
                <Button type="softPrimary" className="rounded">Soft Primary</Button>
            </div>
            <div className="mb-4">
                <Button type="gradient" className="rounded">Gradient</Button>
            </div>
            <div className="mb-4">
                <Button type="glass" className="rounded">Glass</Button>
            </div>
            <div className="mb-4">
                <Button type="neon" className="rounded">Neon</Button>
            </div>
            <div className="mb-4">
                <Button type="ghost" className="rounded">Ghost</Button>
            </div>
            <div className="mb-4">
                <Button type="shadow" className="rounded">Shadow</Button>
            </div>
            <div className="mb-4">
                <Button type="lightPrimary" className="rounded">Light Primary</Button>
            </div>
            <div className="mb-4">
                <Button type="lightAccent" className="rounded">Light Accent</Button>
            </div>
            <div className="mb-4">
                <Button type="pastel" className="rounded">Pastel</Button>
            </div>
            <div className="mb-4">
                <Button type="subtle" className="rounded">Subtle</Button>
            </div>
            <div className="mb-4">
                <Button type="inverted" className="rounded">Inverted</Button>
            </div>
        </div>
    );
};

export default Buttonshow;
