import { Button, Input, Option, Select, Textarea } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form"
import Swal from "sweetalert2";

const SubmitRatings = () => {

    const { register, handleSubmit, control } = useForm()

    const onSubmit = (data) => {

        console.log(data)

        fetch("http://localhost:5000/ratings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.insertedId ) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Ratings Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            });
    }

    return (
        <div>
            <div>
                <h2 className="text-2xl my-5 text-center font-bold">Rate here</h2>
            </div>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Input label="Image link" {...register("image", { required: true })} />
                    </div>
                    {/* row 2 */}
                    <div className="flex gap-5">
                        <div>
                            <Input label="Date of Marriage" {...register("marriageDate", { required: true })} />
                        </div>
                        <div>
                            <Controller
                                name="reviewStar"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="reviewStar">
                                        <Option value="1">1</Option>
                                        <Option value="2">2</Option>
                                        <Option value="3">3</Option>
                                        <Option value="4">4</Option>
                                        <Option value="5">5</Option>

                                    </Select>
                                )}
                            />
                        </div>
                    </div>
                    <div>
                        <Textarea label="Story" {...register("successStoryText")} />
                    </div>

                    <Button className="bg-pink-400 text-white " type="submit">Submit</Button>
                    
                </form>
            </div>
        </div>
    );
};

export default SubmitRatings;