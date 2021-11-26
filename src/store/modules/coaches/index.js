export const coachesModule = {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30,
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30,
                },
            ],
        };
    },
    mutations: {
        addCoach(state, coach) {
            state.coaches.push(coach);
        },
        setCoaches(state, coaches) {
            state.coaches = coaches;
        },
        setLastFecth(state) {
            state.lastFetch = new Date().getTime();
        },
    },
    actions: {
        async addCoach(context, coach) {
            const userId = context.rootGetters.userId;

            const res = await fetch(
                `https://vuejs-course-fc094-default-rtdb.firebaseio.com/coaches/${userId}.json`,
                {
                    method: 'PUT',
                    body: JSON.stringify(coach),
                },
            );

            if (!res.ok) {
                // error ...
            } else {
                context.commit('addCoach', {
                    ...coach,
                    id: userId,
                });
            }
        },
        async loadCoaches(context, payload) {
            // if cached data is less than 1 minute old, return cached data
            if (!payload?.forceRefresh && !context.getters.shouldUpdate) return;

            const res = await fetch(
                'https://vuejs-course-fc094-default-rtdb.firebaseio.com/coaches.json',
            );
            const data = await res.json();

            if (!res.ok) {
                const err = new Error(data.message || 'Failed to fetch!');
                throw err;
            }

            const coaches = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }));

            context.commit('setCoaches', coaches);
            context.commit('setLastFecth');
        },
    },
    getters: {
        coaches(state) {
            return state.coaches;
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },
        isCoach(state, _, _2, rootGetters) {
            return state.coaches
                .map((coach) => coach.id)
                .includes(rootGetters.userId);
        },
        shouldUpdate(state) {
            if (!state.lastFetch) return true;
            const currentTime = new Date().getTime();
            return (currentTime - state.lastFetch) / 1000 > 60;
        },
    },
};
