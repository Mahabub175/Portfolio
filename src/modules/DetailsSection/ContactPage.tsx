import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import AnimatedText from "../../components/AnimatedText";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type TForm = {
    name: string;
    email: string;
    message: string;
};

const links = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/mahabub-ahmed175/",
    },
    {
        name: "X (Twitter)",
        icon: <FaXTwitter />,
        href: "https://twitter.com/Mahabub175",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/Mahabub175",
    },
    {
        name: "Email",
        icon: <FaEnvelope />,
        href: "mailto:mahabub.ahmed175@gmail.com",
    },
];

const ContactPage: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<TForm>();
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<TForm> = async (data) => {
        setLoading(true);

        const serviceId = import.meta.env.VITE_SERVICEID;
        const templateId = import.meta.env.VITE_TEMPLATEID;
        const publicKey = import.meta.env.VITE_PUBLICKEY;

        const templateParam = {
            from_name: data?.name,
            from_email: data?.email,
            to_name: "Mahabub Ahmed",
            message: data?.message,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParam, publicKey);
            toast.success(
                `Thank you for your message ${templateParam?.from_name}`,
            );
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

        reset();
    };

    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 md:ml-[200px] lg:ml-[350px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold prose-a:text-slate-400 prose-a:no-underline lg:hover:prose-a:text-primary-400 prose-h4:text-slate-300 prose-h4:font-medium">
                <h1>
                    {"Let's Connect".split("").map((l, i) => (
                        <AnimatedText
                            key={`projects-header-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <div className="w-full flex flex-col gap-8 justify-start items-start lg:flex-row-reverse">
                    <div className="flex flex-col gap-2 min-w-max lg:min-w-[250px]">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className="flex flex-row items-center gap-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {l.icon}
                                {l.name}
                            </a>
                        ))}
                    </div>

                    <form
                        action="submit"
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4 text-slate-400"
                    >
                        <h4 className="my-0 mb-5">Send me a Direct message</h4>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="visitor_name">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    required
                                    placeholder="e.g. John Doe"
                                    className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="visitor_email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    required
                                    placeholder="e.g. john.doe@example.com"
                                    className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="visitor_subject">Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                required
                                placeholder="Write your message here..."
                                className="rounded-lg border-2 border-slate-700 px-4 py-2 outline-none focus:border-primary-400 placeholder:text-slate-600 text-slate-300 bg-slate-800/50"
                                rows={6}
                            />
                        </div>
                        <button
                            disabled={loading}
                            className="bg-primary-400 lg:hover:bg-primary-200 rounded-lg px-4 py-2 text-white w-full lg:max-w-[200px] flex items-center justify-center disabled:opacity-75 font-bold"
                        >
                            {loading ? (
                                <div className="animate-spin w-6 h-6 rounded-full border-4 border-t-primary-400 border-white bg-transparent" />
                            ) : (
                                "Send"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
