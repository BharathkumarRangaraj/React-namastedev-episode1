const parant=React.createElement('div',{id:'parant'},React.createElement('div',
{id:'child'},[React.createElement('h1',{},'i am h1 tags'),React.createElement('h2',{},'i am h2 tag')]))


//const heading=React.createElement('h1',{id:"headings"},'hello from reacttt');
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parant);
