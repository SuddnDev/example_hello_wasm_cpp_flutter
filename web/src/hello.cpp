extern "C"
{
    // Import from JS.
    extern void print_i(int i);

    // Export to JS.
    void print_int(int i)
    {
        print_i(i);
    }

    // Export to JS.
    int sum(const int a, const int b)
    {
        const int sum = a + b;
        print_i(sum);
        return sum;
    }
}