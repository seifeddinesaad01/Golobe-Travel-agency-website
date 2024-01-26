
type InputProps = {
    id: string;
    name: string;
    placeholder: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    touched: any;
    errors: any;
    text: string;
    className:string;
};

export const Input = ({ id, name, placeholder, type, value, onChange, onBlur, touched, errors, text, className }: InputProps) => {
    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
                {text}
            </label>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                type={type}
                className={`${touched[name] && errors[name] ? 'border-red-300' : 'border-gray-300'}
            appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {touched[name] && errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
            )}
        </div>
    );
}