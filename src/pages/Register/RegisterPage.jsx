import { SESSIONS_TRACK, registerAttendee } from "../../api";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";

function RegisterPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [registrationId, setRegistrationId] = useState(null);
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            role: ""
        }
    )

    const ROLES = ['Student', 'Junior', 'Mid', 'Senior'];

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsLoading(true);
            setError(null)
            setRegistrationId(null);

            try {
                const data = await registerAttendee(formData);

                if (data.ok) {
                    setRegistrationId(data.registrationId)
                } else {
                    setError(data.error)
                }

            } catch (err) {
                console.error("Ups! Something happened:", err);
                setError("Ups! Something happened. Please try again.");

            } finally {
                setIsLoading(false);
            }
        }

    const handleChange = (e) => {
        // 'name' is the input's tag "name" in the html --> same for "name", "email", "role" in this case
        const { name, value } = e.target;

        if (name === "name") {
            // only allows unicode letters (ñ, é), apostrophes, hyphens, and spaces
            const nameRegex = /^[\p{L}' -]*$/u;

            if (!nameRegex.test(value)) {
                return;
            }
        }

        setFormData(prevData => ({
            // important in this case! if we dont keep prevData, it deletes it
            ...prevData,
            [name]: value
        }));
    }

    return (
        <main className="p-4 flex flex-col justify-start items-center w-full">
            <div className="shadow-lg m-5 bg-white rounded-xl w-full max-w-xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-full p-5">
                    <label htmlFor="name_id" className="font-medium"> Name </label>
                    <input
                        className="w-full border border-violet-400 rounded-xl bg-violet-100 p-3"
                        type="text"
                        id="name_id"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email_id" className="font-medium"> Email </label>
                    <input
                        className="w-full border border-violet-400 rounded-xl bg-violet-100 p-3"
                        type="email"
                        id="email_id"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="role_id" className="font-medium"> Role </label>
                    <select
                        id="role_id"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full rounded-md shadow-sm py-3 border border-gray-300"
                    >
                        <option value="" disabled>
                            Select your role...
                        </option>
                        {ROLES.map((role, index) => (
                            <option key={role + index} value={role}>
                                {role}
                            </option>
                        ))}
                    </select>
                    <PrimaryButton
                        isLoading={isLoading}
                        type={"submit"}
                        children={"Submit"}
                        className={`${"text-black bg-violet-400"}`}
                    />
                </form>
                {/* Show the success message */}
                {registrationId && (
                    <div className="p-3 bg-green-100 text-green-800 rounded-md">
                        Success! Your ID is: {registrationId}
                    </div>
                )}

                {/* Show the error message */}
                {error && (
                    <div className="p-3 bg-red-100 text-red-800 rounded-md">
                        Error: {error}
                    </div>
                )}
            </div>
        </main>
    )
}

export default RegisterPage