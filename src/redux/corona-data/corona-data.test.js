import reducer from "./coronaReducer";
import type from "./coronaTypes";



describe("corona reducer", ()=>{

    it("should return default state",()=>{
        const value = reducer(undefined, {});
        const expectedDefault= {
            data:[],
            isLoading: false,
            error: undefined
          }
        expect(value).toEqual(expectedDefault)   })

    it("should return new state",()=>{
        const action = {
            type: type.FETCH_SUCCESS,
            payload: {title:"test-data"}
        }
        const value = reducer(undefined, action);

        expect(value.data).toEqual(action.payload)   })
})