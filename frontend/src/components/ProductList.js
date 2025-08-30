import React from 'react';
export default function ProductList({ items }){
if(!items || items.length === 0) return <p>No products yet.</p>
return (
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16}}>
{items.map(p => (
<div key={p.id} style={{border: '1px solid #eee', padding: 12, borderRadius: 8}}>
<div style={{height:160, background:'#f7f7f7'}} />
<h3>{p.name}</h3>
<p>₦{p.price}</p>
</div>
))}
</div>
)
}