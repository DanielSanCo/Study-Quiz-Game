export type getTenantResponse = {
    questions: string;
}

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch (tenantSlug) {
            case 'questions-teo':
                return {
                    questions: 'questions-teo',
                }
                break;
            case 'questions-mat':
                return {
                    questions: 'questions-mat',
                }
                break;
            default: return false;
        }

    }

})