/* eslint-disable prettier/prettier */
import statesOfNigeria from '@/util/states';
import { Minus, Plus } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import FilterNavSelect from './FilterNavSelect';

/* eslint-disable prettier/prettier */
export default function FilterNavigation({
    form,
    setForm,
    className,
}: {
    className?: string;
    form: {
        state: string;
        LGA: string;
        city: string;
        priceRange: string;
    };
    setForm: (form: {
        state: string;
        LGA: string;
        city: string;
        priceRange: string;
    }) => void;
}) {
    const [accordionState, setAccordionState] = useState({
        1: true,
        2: false,
    });

    const LGAOptions = statesOfNigeria.find(
        ({ name }) => name.toLowerCase() === form?.state,
    ) || { LGA: [] };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    return (
        <aside className={`h-full ${className}`}>
            {/* ACCORDION CARD 1 */}
            <div>
                <div
                    onClick={() =>
                        setAccordionState({
                            ...accordionState,
                            1: !accordionState[1],
                        })
                    }
                    className="flex cursor-pointer items-center justify-between border-b py-5 hover:border-primary hover:text-primary max-md:border-neutral-700 lg:pb-3 lg:dark:border-neutral-800"
                >
                    <span className="text-lg font-bold">By Location</span>
                    <span className="flex items-center">
                        <Plus
                            className={`size-4 transition-all duration-200 ease-in-out ${accordionState[1] ? 'hidden' : 'block'}`}
                        />
                        <Minus
                            className={`size-4 transition-all duration-200 ease-in-out ${accordionState[1] ? 'block' : 'hidden'}`}
                        />
                    </span>
                </div>

                {/* ACCORDION CARD CONTENT */}
                <div
                    className={`my-5 space-y-4 ${accordionState[1] ? 'block' : 'hidden'}`}
                >
                    <FilterNavSelect
                        id="state"
                        value={form.state}
                        placeholder="Choose a state"
                        onChange={handleChange}
                        label="State"
                        name="state"
                        options={statesOfNigeria.map(({ name }) => ({
                            label: name,
                            value: name.toLowerCase(),
                        }))}
                    />
                    <FilterNavSelect
                        id="LGA"
                        placeholder="Choose a local government"
                        value={form.LGA}
                        onChange={handleChange}
                        label="Local Government"
                        name="LGA"
                        options={LGAOptions?.LGA.map((lga: string) => ({
                            label: lga,
                            value: lga.toLowerCase(),
                        }))}
                    />
                </div>
            </div>

            {/* ACCORDION CARD 2 */}
            <div>
                <div
                    onClick={() =>
                        setAccordionState({
                            ...accordionState,
                            2: !accordionState[2],
                        })
                    }
                    className="flex cursor-pointer items-center justify-between border-b py-5 hover:border-primary hover:text-primary max-md:border-neutral-700 lg:py-3 lg:dark:border-neutral-800"
                >
                    <span className="text-lg font-bold">By price</span>
                    <span className="flex items-center">
                        <Plus
                            className={`size-4 ${accordionState[2] ? 'hidden' : 'block'}`}
                        />
                        <Minus
                            className={`size-4 ${accordionState[2] ? 'block' : 'hidden'}`}
                        />
                    </span>
                </div>
                {/* ACCORDION CARD CONTENT */}
                <div
                    className={`my-5 ${accordionState[2] ? 'block' : 'hidden'}`}
                >
                    <div className="flex items-center gap-x-2">
                        <div>
                            <label htmlFor="min" className="sr-only">
                                min price range
                            </label>
                            <input
                                id="min"
                                className="w-full rounded bg-inherit p-2 px-3 text-center text-sm focus:border-primary focus:ring-0 dark:border-neutral-800"
                                type="text"
                                placeholder=" &#8358; min"
                            />
                        </div>
                        <Minus className="" />
                        <div>
                            <label htmlFor="max" className="sr-only">
                                max price range
                            </label>
                            <input
                                id="max"
                                className="w-full rounded bg-inherit p-2 px-3 text-center text-sm focus:border-primary focus:ring-0 dark:border-neutral-800"
                                type="text"
                                placeholder="&#8358; max"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-x-5">
                        <button className="w-full rounded-sm bg-primary p-2 text-white">
                            APPLY
                        </button>
                        <button className="w-full rounded-sm bg-primary p-2 text-white">
                            RESET
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}
