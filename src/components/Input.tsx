


export function Input({ value, type, onChange }: {value: string, type: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e);
    }

    return (
        <input
            type= {type}
            value= {value}
            onChange={(e) => handleChange(e)}
            placeholder= {type}
        />
    ) 
}


