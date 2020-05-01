import React from 'react';

function FormPagination({setpostPerPage,itemlength,setitemlength }) {
    return (
        <div className="container md-4">
            <form className="item-add-form d-flex container_form" 
                    onSubmit={(e) => {
                        e.preventDefault()
                        setpostPerPage(itemlength);
                    }}>
                <input type="number" 
                    className="form-control" 
                    placeholder="change number of states on page"
                    onChange={(e) => {
                        setitemlength(e.target.value);
                    }}
                    />
                <button className="btn bg-mainDark text-White btn-sm">change</button>
            </form>
        </div>
    );
}

export default FormPagination;
