import { header2 } from "./header2";
import Cookies from "js-cookie";

const { useState } = require("react");
function HeaderElement({ id, name, createdAt,cookies }) {
    // Call your Hook here
    async function get_id(e,cookies) {
        try {
            const resp = await fetch(`${process.env.url}api/v1/courses/created-courses/${e}`, {
                headers: {
                    Authorization: "Bearer " + cookies.token,
                },
            });

            const dt = await resp.json();
            Cookies.set('original_id', dt.data.course);
            //console.log(dt.data.course);
        } catch (e) {
            console.log(e);
        }
    };
    const handel_set_cookies = (e,cookies) => {
        get_id(e,cookies);
        Cookies.set("instance_id", e);
        
    }
    return header2(<a href={`/instructor/courses/${id}/courseSpecs/part1`} onClick={handel_set_cookies(id,cookies)}>{name}</a>, [], createdAt);
}
export default HeaderElement