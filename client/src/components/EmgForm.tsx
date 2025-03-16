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
        className="glass-card rounded-2xl shadow-2xl p-10 max-w-lg mx-auto border border-blue-100 relative group"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 blur"></div>
        <h2 className="text-3xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">קביעת תור פרטי לבדיקת EMG</h2>
        <p className="text-gray-600 text-center mb-8 text-lg">המומחים שלנו מחכים לעזור לך</p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
              זמינות גבוהה
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-blue-500"></span>
              רופאים מומחים
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-purple-500"></span>
              ניסיון של +15 שנה
            </span>
          </div>er px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
            רופאים מומחים
          </span>
        </div>

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
