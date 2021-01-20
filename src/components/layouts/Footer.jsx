import React from 'react';
import classnames from 'classnames';

function Footer({ bottom }) {
    return (
        <footer className={classnames('bg-light p-3 ',{
            'fixed-bottom':bottom
        })}>
            <p className="text-center">Copyright &copy; 2021 All Rights Reserved Resume Builder.</p>
        </footer>
    )
}

export default Footer;
