import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema, type InsertAppointment } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EmgForm() {
  const { toast } = useToast();

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      details: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertAppointment) => {
      const res = await apiRequest("POST", "/api/appointments", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "הטופס נשלח בהצלחה",
        description: "ניצור איתך קשר בהקדם",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "שגיאה",
        description: "אירעה שגיאה בשליחת הטופס, אנא נסה שוב",
      });
    }
  });

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-3">קביעת תור פרטי לבדיקת EMG</h2>
        <p className="text-gray-600 text-center mb-8">לקבוע תור לבדיקת EMG ולדבר עם הרופאים שלנו</p>

        <div className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="שם מלא" 
                    className="text-right bg-gray-50 border-gray-200 focus:border-blue-500 rounded-xl py-6" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="טלפון" 
                    type="tel" 
                    className="text-right bg-gray-50 border-gray-200 focus:border-blue-500 rounded-xl py-6" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="דוא״ל" 
                    type="email" 
                    className="text-right bg-gray-50 border-gray-200 focus:border-blue-500 rounded-xl py-6" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea 
                    placeholder="פרטי הבדיקה" 
                    className="text-right bg-gray-50 border-gray-200 focus:border-blue-500 rounded-xl min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-lg py-6 rounded-xl"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "שולח..." : "שליחה"}
        </Button>
      </form>
    </Form>
  );
}
const UrgencyBadge = () => (
  <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-2 rounded-lg mb-6 animate-pulse">
    <p className="text-sm font-semibold">⏰ נותרו 3 תורים פנויים להשבוע</p>
  </div>
);
