// const sum = require('./sum');
// test('add 1+2 to 3', () => {
//     expect(sum(1,2)).toBe(3);
// });

test('two plus two is four', () => {
    expect(2+2).toBe(4);
})

test('object assignment', () => {
    const data = { one: 1};
    data['two'] = 2;
    expect(data).toEqual({ one:1, two:2});
}); 

test('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test('two is truthy', () => {
    const n = 2;
    expect(n).toBeTruthy();
});

// const myFunction = require("./sum");
// test('throws on invalid input', ()=> {
//     expect(() => {
//         myFunction("inavlidInput");
//     }).toThrow();
// });


// const fetchData = require('./sum');

// test('the test is about penaut butter' , done => {
//     function callBack(data) {
//         try {
//             expect(data).toBe('penaut butter')
//             done();
//         } catch (error) {
//             done(error);
//         }
//     }
//     fetchData(callBack);
// })

//const fetchPromise = require('./sum');

// test('test for pennut butter', () => {
//     return expect(fetchPromise()).resolves.toBe('peanut butter');   
// });

// test('test for pennut butter fail', () => {
//     return expect(fetchPromise()).rejects.toThrow('error');
// });

// test('test for pennut butter', async () => {
//     const data = await fetchPromise();
//     expect(data).toBe('peanut butter');
// })



test('test for mock', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toBeCalledWith(1);
})

test('spy test', () => {
    const video = {
        play() {
            return true;
        }
    }

    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})