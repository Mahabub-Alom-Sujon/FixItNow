"use client";
import { useState } from "react";
import { Plus, Package } from "lucide-react";
import { createCategory } from "../_actions/createCategory";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/PageHeader";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Category {
    id: string;
    name: string;
    description: string | null;
    icon: string | null;
    createdAt: string;
    updatedAt: string;
}

interface Props {
    initialCategories: Category[];
}

export default function Categories({
    initialCategories,
}: Props) {
    const router = useRouter();
    //const [categories] = useState(initialCategories);
    const categories = initialCategories;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [saving, setSaving] = useState(false);
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);

        try {
            await createCategory({
                name,
                description,
            });

            toast.success("Category created");

            setName("");
            setDescription("");
            setDialogOpen(false);
            router.refresh();
        } catch (err: any) {
            toast.error(err.message || "Failed to create category");
        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="space-y-6">
            <PageHeader
                title="Categories"
                description="Manage service categories"
                action={
                    <Button onClick={() => setDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Category
                    </Button>
                }
            />

            {categories.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-16">
                        <Package className="mb-4 h-12 w-12 text-muted-foreground" />

                        <p className="text-muted-foreground">No categories found.</p>

                        <Button
                            className="mt-5"
                            onClick={() => setDialogOpen(true)}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add First Category
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-16">#</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Created At</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {categories.map((category, index) => (
                                        <TableRow key={category.id}>
                                            <TableCell>{index + 1}</TableCell>

                                            <TableCell className="font-medium">
                                                {category.name}
                                            </TableCell>

                                            <TableCell>
                                                {category.description || (
                                                    <span className="text-muted-foreground">
                                                        No description
                                                    </span>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(category.createdAt).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell>
                                                <Badge>Active</Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            )}

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Category</DialogTitle>
                        <DialogDescription>
                            Add a new category.
                        </DialogDescription>
                    </DialogHeader>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <Label>Name</Label>

                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Textarea
                                rows={3}
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                type="button"
                                onClick={() => setDialogOpen(false)}
                            >
                                Cancel
                            </Button>

                            <Button disabled={saving}>
                                {saving ? "Creating..." : "Create"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}