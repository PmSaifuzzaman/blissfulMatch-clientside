
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { Controller, useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";



const EditBiodata = () => {

    const { user } = useAuth()
    const email = user.email
    const name = user.name

    const { register, handleSubmit, control } = useForm()
    const onSubmit = (data) => {
        console.log(data)


        fetch(`https://blissful-match-server.vercel.app/users/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Biodata Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            });


    }

    return (
        <div>
            <div>
                <h2 className="text-2xl text-center my-3">Edit Your Biodata</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* line 1 */}
                    <div>
                        <Input label="Name" {...register("Name", { required: true })} defaultValue={name} />
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <Input label="Fathers Name" {...register("FathersName")} />
                        </div>
                        <div>
                            <Input label="Mothers Name" {...register("MothersName")} />
                        </div>
                    </div>
                    {/* line 2 */}
                    <div>
                        <Controller
                            name="Biodata"
                            control={control}
                            rules={{ required: 'Please select a gender' }}
                            defaultValue=""
                            render={({ field }) => (
                                <Select {...field} label="Select Gender">
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                </Select>
                            )}
                        />
                    </div>
                    {/* line 3 */}
                    <div>
                        <Input label="Profile Image link" {...register("ProfileImage", { required: true })} />
                    </div>
                    {/* line 4 */}
                    <div>
                        <Input label="Date of Birth" {...register("DateOfBirth", { required: true })} />
                    </div>
                    {/* line 5 */}
                    <div className="flex gap-5">
                        <div>
                            <Input label="Height (ex:5 feet 11 inches)" {...register("Height")} />
                        </div>
                        <div>
                            <Input label="Weight (ex:78.92 kg)" {...register("Weight")} />
                        </div>
                        <div>
                            <Input label="Age " {...register("Age")} />
                        </div>
                        <div>
                            <Input label="Expected partner Age " {...register("ExpectedPartnerAge")} />
                        </div>
                    </div>
                    {/* line 6 */}
                    <div className="flex gap-5">
                        <div>
                            <Input label="Occupation" {...register("Occupation")} />
                        </div>
                        <div>
                            <Controller
                                name="Race"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="Race" defaultValue="default">
                                        <Option value="Bangladesi">Bangladesi</Option>
                                        <Option value="Indian">Indian</Option>
                                        <Option value="Pakistani">Pakistani</Option>
                                        <Option value="Australian">Australian</Option>
                                        <Option value="Canadian">Canadian</Option>
                                        <Option value="United States">United States</Option>
                                    </Select>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="PermanentDivisionName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="PermanentDivisionName">
                                        <Option value="Dhaka">Dhaka</Option>
                                        <Option value="Chittagong">Chittagong</Option>
                                        <Option value="Khulna">Khulna</Option>
                                        <Option value="Rajshahi">Rajshahi</Option>
                                        <Option value="Barisal">Barisal</Option>
                                        <Option value="Sylhet">Sylhet</Option>
                                        <Option value="Rangpur">Rangpur</Option>
                                        <Option value="Mymensing">Mymensing</Option>
                                    </Select>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="PresentDivisionName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="PresentDivisionName">
                                        <Option value="Dhaka">Dhaka</Option>
                                        <Option value="Chittagong">Chittagong</Option>
                                        <Option value="Khulna">Khulna</Option>
                                        <Option value="Rajshahi">Rajshahi</Option>
                                        <Option value="Barisal">Barisal</Option>
                                        <Option value="Sylhet">Sylhet</Option>
                                        <Option value="Rangpur">Rangpur</Option>
                                        <Option value="Mymensing">Mymensing</Option>
                                    </Select>
                                )}
                            />
                        </div>
                    </div>
                    {/* line 8 */}
                    <div className="flex gap-5">
                        <div>
                            <Input label="Mobile Number" {...register("MobileNumber", { required: true })} />
                        </div>
                        <div>
                            <Input label="Contact Email" {...register("ContactEmail", { required: true })} defaultValue={email} />
                        </div>
                    </div>
                    {/* line 9 */}
                    <div className="flex gap-5">
                        <div>
                            
                            <Controller
                                name="ExpectedPartnerWeight"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="ExpectedPartnerWeight">
                                        <Option value="40-45 kg">40-45 kg</Option>
                                        <Option value="45-50 kg">45-50 kg</Option>
                                        <Option value="50-55 kg">50-55 kg</Option>
                                        <Option value="55-60 kg">55-60 kg</Option>
                                        <Option value="60-65 kg">60-65 kg</Option>
                                        <Option value="65-75 kg">65-75 kg</Option>
                                    </Select>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="ExpectedPartnerHeight"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field} label="ExpectedPartnerHeight">
                                        <Option value="4 feet">4 feet</Option>
                                        <Option value="5 feet">5 feet</Option>
                                        <Option value="6 feet">6 feet</Option>
                                    </Select>
                                )}
                            />
                        </div>
                    </div>



                    <Button className="bg-pink-400 text-white w-full" type="submit">Update</Button>

                </form>
            </div>
        </div>
    );
};

export default EditBiodata;