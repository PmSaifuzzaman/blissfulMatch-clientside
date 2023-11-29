
import {  Button, Input, Option, Select } from "@material-tailwind/react";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";

const EditBiodata = () => {

    const{user} = useAuth()
    const email = user.email

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    
    
        fetch(`http://localhost:5000/users/${email}`, {
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
                        <Input label="Name" {...register("Name")} />
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
                        <Select {...register("Biodata")} label="Select Gender" >
                            <Option>Male</Option>
                            <Option>Female</Option>
                        </Select>
                    </div>
                    {/* line 3 */}
                    <div>
                        <Input label="Profile Image link" {...register("ProfileImage")} />
                    </div>
                    {/* line 4 */}
                    <div>
                        <Input label="Date of Birth" {...register("DateOfBirth")} />
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
                            <Select {...register("Race")} label="Race">
                                <Option>Bangladesi</Option>
                                <Option>Indian</Option>
                                <Option>Pakistani</Option>
                                <Option>Australian</Option>
                                <Option>Canadian</Option>
                                <Option>Unaited States</Option>
                            </Select>
                        </div>
                        <div>
                            <Select {...register("Permanent Address")} label="PermanentDivisionName">
                                <Option>Dhaka</Option>
                                <Option>Chittagong</Option>
                                <Option>Khulna</Option>
                                <Option>Rajshahi</Option>
                                <Option>Barisal</Option>
                                <Option>Sylhet</Option>
                                <Option>Rangpur</Option>
                                <Option>Mymensing</Option>
                            </Select>
                        </div>
                        <div>
                            <Select {...register("Present Address")} label="PresentDivisionName">
                                <Option>Dhaka</Option>
                                <Option>Chittagong</Option>
                                <Option>Khulna</Option>
                                <Option>Rajshahi</Option>
                                <Option>Barisal</Option>
                                <Option>Sylhet</Option>
                                <Option>Rangpur</Option>
                                <Option>Mymensing</Option>
                            </Select>
                        </div>
                    </div>
                    {/* line 8 */}
                    <div className="flex gap-5">
                        <div>
                            <Input label="Mobile Number" {...register("MobileNumber")} />
                        </div>
                        <div>
                            <Input label="Contact Email" {...register("ContactEmail")} defaultValue={email} />
                        </div>
                    </div>
                    {/* line 9 */}
                    <div className="flex gap-5">
                        <div>
                            <Select {...register("Expected Partner Weight")} label="ExpectedPartnerWeight">
                                <Option>40-45 kg</Option>
                                <Option>45-50 kg</Option>
                                <Option>50-55 kg</Option>
                                <Option>55-60 kg</Option>
                                <Option>60-65 kg</Option>
                                <Option>65-75 kg</Option>
                            </Select>
                        </div>
                        <div>
                            <Select {...register("Expected Partner Height")} label="ExpectedPartnerHeight">
                                <Option>4 feet</Option>
                                <Option>5 feet</Option>
                                <Option>6 feet</Option>

                            </Select>
                        </div>
                    </div>

                    

                    <Button className="bg-pink-400 text-white w-full" type="submit">Update</Button>

                </form>
            </div>
        </div>
    );
};

export default EditBiodata;