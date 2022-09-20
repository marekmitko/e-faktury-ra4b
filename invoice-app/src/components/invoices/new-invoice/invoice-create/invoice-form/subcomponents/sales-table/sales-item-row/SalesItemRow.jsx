import * as React from "react";
import { useForm } from "react-hook-form";
// import Headers from "./Header";
// import "./styles.css";

// type FormValues = {
//         a: string;
//         b: string;
//         c: string;
// };

let renderCount = 0;

export default function App() {
        const { watch, register, handleSubmit, setValue, formState } = useForm({
        defaultValues: {
                a: "",
                b: "",
                c: ""
        }
    });
    const onSubmit = (data) => console.log(data);
    const [a, b] = watch(["a", "b"]);
    renderCount++;

    React.useEffect(() => {
        if (formState.touchedFields.a && formState.touchedFields.b && a && b) {
            setValue("c", `${a} ${b}`);
        }
    }, [setValue, a, b, formState]);

    return (
        <div>
            {/* <Headers
                renderCount={renderCount}
                description="Performant, flexible and extensible forms with easy-to-use validation."
            /> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("a")} placeholder="a" />
                <input {...register("b")} placeholder="b" />
                <input {...register("c")} placeholder="c" />
                <input type="submit" />

                <button
                    type="button"
                    onClick={() => {
                        setValue("a", "what", { shouldTouch: true });
                        setValue("b", "ever", { shouldTouch: true });
                    }}
                >
                    trigger value
                </button>
            </form>
        </div>
    );
}
