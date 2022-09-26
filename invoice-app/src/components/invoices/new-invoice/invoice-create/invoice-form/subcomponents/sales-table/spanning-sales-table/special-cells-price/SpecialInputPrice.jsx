import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useForm, { FormContext, useFormContext } from "react-hook-form";




function SpecialInput() {
    const { setValue, register, unregister } = useFormContext();
    const [value, setReactSelect] = useState("");
    const handleChange = selectedOption => {
      setValue("reactSelect", selectedOption);
      setReactSelect({ selectedOption });
    };
  
    useEffect(() => {
      register({ name: "Interests" }, { required: true });
      return () => {
        unregister("Interests");
      };
    }, [register, unregister]);
  
    return (
      <div>
        <label>Interests</label>
        <input
          type="text"
          defaultValue={value}
          name="Interests"
          onChange={handleChange}
        />
      </div>
    );
  }