namespace Domain
{
    public interface IIdentityObject<T>
    {
        T ID { get; set; }
    }
}
