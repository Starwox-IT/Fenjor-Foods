import React from 'react';

export const InputField = React.forwardRef(({ label, subLabel, error, ...props }, ref) => (
    <div className="flex flex-col w-full">
        {label && (
            <label className="text-gray-800 font-medium text-sm mb-2 font-primary">
                {label}
                {subLabel && <span className="font-medium text-gray-500 ml-1">{subLabel}</span>}
            </label>
        )}
        <input
            ref={ref}
            className={`w-full bg-white border ${error?.message ? 'border-red-500' : 'border-gray-200'} rounded-[0.5rem] py-3.5 px-4 text-sm font-primary text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#DC5E32] focus:border-[#DC5E32] transition-colors placeholder:text-gray-400`}
            {...props}
        />
        {error?.message && <span className="text-red-500 text-xs mt-1 font-primary">{error.message}</span>}
    </div>
));

export const SelectField = React.forwardRef(({ label, subLabel, options, error, ...props }, ref) => (
    <div className="flex flex-col w-full">
        {label && (
            <label className="text-gray-800 font-medium text-sm mb-2 font-primary">
                {label}
                {subLabel && <span className="font-medium text-gray-500 ml-1">{subLabel}</span>}
            </label>
        )}
        <select
            ref={ref}
            className={`w-full bg-white border ${error?.message ? 'border-red-500' : 'border-gray-200'} rounded-[0.5rem] py-3.5 px-4 text-sm font-primary text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#DC5E32] focus:border-[#DC5E32] transition-colors appearance-none`}
            {...props}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path basePath='%236B7280' /%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.2em 1.2em'
            }}
        >
            <option value="" disabled hidden>{props.placeholder || 'Select option'}</option>
            {options.map((opt, idx) => (
                <option key={idx} value={opt.value || opt}>{opt.label || opt}</option>
            ))}
        </select>
        {error?.message && <span className="text-red-500 text-xs mt-1 font-primary">{error.message}</span>}
    </div>
));

export const TextareaField = React.forwardRef(({ label, subLabel, error, ...props }, ref) => (
    <div className="flex flex-col w-full">
        {label && (
            <label className="text-gray-800 font-medium text-sm mb-2 font-primary">
                {label}
                {subLabel && <span className="font-normal text-gray-500 ml-1">{subLabel}</span>}
            </label>
        )}
        <textarea
            ref={ref}
            className={`w-full bg-white border ${error ? 'border-red-500' : 'border-gray-200'} rounded-[0.5rem] py-3.5 px-4 text-sm font-primary text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#DC5E32] focus:border-[#DC5E32] transition-colors placeholder:text-gray-400 min-h-[120px] resize-y`}
            {...props}
        />
        {error && <span className="text-red-500 text-xs mt-1 font-primary">{error.message}</span>}
    </div>
));
