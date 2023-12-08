export const useSurreal = () => {
    const { $surreal } = useNuxtApp();
    return $surreal;
};
