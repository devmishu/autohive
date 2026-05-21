"use client"

import { AlertDialog, Button } from "@heroui/react";
import { carService } from "@/services/carService";
import { revalidateAnyPath } from "@/actions/revalidate";
import toast from "react-hot-toast";


const DeleteAddedCar = ({ id }) => {

    const handleDeleteMyCar = async () => {

        const { data: tokenData } = await authClient.token();

        try {
            const data = await carService.deleteMyCar(id,tokenData);

            toast.success(`${data.message}`);
            revalidateAnyPath("/manage-cars/myaddedcars");

        } catch (error) {

            toast.error(`${error.message}`);
        }
    }
    return (

        <AlertDialog>
            <Button variant="danger" className="button-primary">Delete </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Car</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" className="button-outline">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDeleteMyCar}
                                slot="close" className="button-primary">
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog >

    );
}

export default DeleteAddedCar