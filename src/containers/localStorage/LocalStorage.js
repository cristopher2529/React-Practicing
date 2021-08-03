import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const LocalStorage = (props) => {
    const [name, setName] = useLocalStorage("name", { name: "", modified: 0 });

    const onChangedHandler = (e) => {
        // const value = e.target.velue;
        const value = e.target.value;
        setName((prevName) => {
            console.log(prevName.modified);
            return {
                name: value,
                modified: ++prevName.modified,
            };
        });
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    value={name.name}
                    onChange={(e) => onChangedHandler(e)}
                />
            </form>
        </>
    );
};

export default LocalStorage;
