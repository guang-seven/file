(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{2111:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return o})),n.d(t,"language",(function(){return s}));var o={comments:{lineComment:"#"}},s={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2F6Y2xpL2F6Y2xpLmpzIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJpZ25vcmVDYXNlIiwidG9rZW5Qb3N0Zml4Iiwic3RyIiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsInRva2VuIiwibmV4dCIsInR5cGUiLCJjb21tZW50Il0sIm1hcHBpbmdzIjoiNEZBQUEscUZBS08sSUFBSUEsRUFBTyxDQUNkQyxTQUFVLENBQ05DLFlBQWEsTUFHVkMsRUFBVyxDQUNsQkMsYUFBYyxVQUNkQyxZQUFZLEVBQ1pDLGFBQWMsU0FDZEMsSUFBSyxTQUNMQyxVQUFXLENBQ1BDLEtBQU0sQ0FDRixDQUFFQyxRQUFTLFlBQ1gsQ0FBQyxlQUFnQixDQUNUQyxNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLENBQUVELE1BQU8saUJBQWtCQyxLQUFNLFlBR3pELENBQUMsY0FBZSxDQUNSRixNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLENBQUVELE1BQU8saUJBQWtCQyxLQUFNLGFBSTdEQyxLQUFNLENBQ0YsQ0FBRUosUUFBUyxZQUNYLENBQUMsYUFBYyxDQUNQQyxNQUFPLENBQ0gsT0FBUSxDQUFFQyxNQUFPLGlCQUFrQkMsS0FBTSxXQUN6QyxXQUFZLG9CQUd4QixDQUFDLFdBQVksQ0FDTEYsTUFBTyxDQUNILE9BQVEsQ0FBRUMsTUFBTyxTQUFVQyxLQUFNLFdBQ2pDLFdBQVksYUFJNUJFLFFBQVMsQ0FDTCxDQUFDLE9BQVEsQ0FDREosTUFBTyxDQUNILE9BQVEsQ0FBRUMsTUFBTyxVQUFXQyxLQUFNIiwiZmlsZSI6IjE4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0IHZhciBjb25mID0ge1xuICAgIGNvbW1lbnRzOiB7XG4gICAgICAgIGxpbmVDb21tZW50OiAnIycsXG4gICAgfVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAna2V5d29yZCcsXG4gICAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgICB0b2tlblBvc3RmaXg6ICcuYXpjbGknLFxuICAgIHN0cjogL1teI1xcc10vLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAY29tbWVudCcgfSxcbiAgICAgICAgICAgIFsvXFxzLStAc3RyKlxccyovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdrZXkuaWRlbnRpZmllcicsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogeyB0b2tlbjogJ2tleS5pZGVudGlmaWVyJywgbmV4dDogJ0B0eXBlJyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIFsvXi0rQHN0cipcXHMqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAna2V5LmlkZW50aWZpZXInLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6IHsgdG9rZW46ICdrZXkuaWRlbnRpZmllcicsIG5leHQ6ICdAdHlwZScgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgXSxcbiAgICAgICAgdHlwZTogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGNvbW1lbnQnIH0sXG4gICAgICAgICAgICBbLy0rQHN0cipcXHMqLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAna2V5LmlkZW50aWZpZXInLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdrZXkuaWRlbnRpZmllcidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgWy9Ac3RyK1xccyovLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICBdLFxuICAgICAgICBjb21tZW50OiBbXG4gICAgICAgICAgICBbLyMuKiQvLCB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVvcyc6IHsgdG9rZW46ICdjb21tZW50JywgbmV4dDogJ0Bwb3BhbGwnIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==