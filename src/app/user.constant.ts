export class UserConstant {    
    public static emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    public static numberRegex = "^[0-9]+(\.[0-9]{1,2})?$";
    public static emailMaxLength = 225;
    public static passwordMaxLenght = 225;
    public static passwordMinLenght = 3;
    public static nameMaxLenght = 225;
    public static nameMinLenght = 3;
    public static admin = "0";
    public static vendor = "1";
    public static branch = "2";
    public static limit = 20;
    public static confirmed = 'confirmed';
    public static pending = 'pending';
    public static completed = 'completed';
    public static cancelled = 'cancelled';
    public static delivered = 'delivered';
    public static approved = 'approved';
}