import { pureSearch } from '../exports'

describe('pureSearch', () => {
	test('test isEnglishContinuousLatin option with Chinese', () => {
		const source = 'Model模型 Context上下文  Protocol协议'
		const pinyinMap = { 模: ['mo'], 型: ['xing'], 上: ['shang'], 下: ['xia'], 协: ['xie'], 文: ['wen'], 议: ['yi'] }
		const target = 'modelsx pr' // model上下 pr连续

		// 不传递 isEnglishContinuousLatin 的情况
		const result1 = pureSearch(source, target, {
			pinyinMap,
		})
		console.log('Search result with Chinese (without isEnglishContinuousLatin):', result1)
		expect(result1).not.toBeUndefined()

		// 传递 isEnglishContinuousLatin 的情况
		const result2 = pureSearch(source, target, {
			pinyinMap,
			isEnglishContinuousLatin: true,
		})
		console.log('Search result with Chinese (with isEnglishContinuousLatin):', result2)
		expect(result2).not.toBeUndefined()
	})

	test('test isEnglishContinuousLatin option with Chinese - discontinuous', () => {
		const source = 'Model模型 Context上下文  Protocol协议'
		const pinyinMap = { 模: ['mo'], 型: ['xing'], 上: ['shang'], 下: ['xia'], 协: ['xie'], 文: ['wen'], 议: ['yi'] }
		const target = 'modelsx po' // model上下 po不连续

		// 不传递 isEnglishContinuousLatin 的情况
		const result1 = pureSearch(source, target, {
			pinyinMap,
		})
		console.log('Search result with Chinese (discontinuous, without isEnglishContinuousLatin):', result1)
		expect(result1).not.toBeUndefined()

		// 传递 isEnglishContinuousLatin 的情况
		const result2 = pureSearch(source, target, {
			pinyinMap,
			isEnglishContinuousLatin: true,
		})
		console.log('Search result with Chinese (discontinuous, with isEnglishContinuousLatin):', result2)
		expect(result2).toBeUndefined()
	})

	test('test isEnglishContinuousLatin option with pure English - discontinuous', () => {
		const source = 'Model Context Protocol'
		const target = 'mod pro'

		// 不传递 isEnglishContinuousLatin 的情况
		const result1 = pureSearch(source, target, {
			pinyinMap: {},
		})
		console.log('Search result with pure English (without isEnglishContinuousLatin):', result1)
		expect(result1).not.toBeUndefined()

		// 传递 isEnglishContinuousLatin 的情况
		const result2 = pureSearch(source, target, {
			pinyinMap: {},
			isEnglishContinuousLatin: true,
		})
		console.log('Search result with pure English (with isEnglishContinuousLatin):', result2)
		expect(result2).not.toBeUndefined()
	})

	test('test isEnglishContinuousLatin option with mixed case', () => {
		const source = 'Model Context Protocol'
		const target = 'modpro' // 大小写混合的连续匹配

		// 不传递 isEnglishContinuousLatin 的情况
		const result1 = pureSearch(source, target, {
			pinyinMap: {},
		})
		console.log('Search result with mixed case (without isEnglishContinuousLatin):', result1)
		expect(result1).not.toBeUndefined()

		// 传递 isEnglishContinuousLatin 的情况
		const result2 = pureSearch(source, target, {
			pinyinMap: {},
			isEnglishContinuousLatin: true,
		})
		console.log('Search result with mixed case (with isEnglishContinuousLatin):', result2)
		expect(result2).toBeUndefined()
	})

	test('test isEnglishContinuousLatin option with single word', () => {
		const source = 'Model Context Protocol'
		const target = 'mo del'

		// 不传递 isEnglishContinuousLatin 的情况
		const result1 = pureSearch(source, target, {
			pinyinMap: {},
		})
		console.log('Search result with single word (without isEnglishContinuousLatin):', result1)
		expect(result1).not.toBeUndefined()

		// 传递 isEnglishContinuousLatin 的情况
		const result2 = pureSearch(source, target, {
			pinyinMap: {},
			isEnglishContinuousLatin: true,
		})
		console.log('Search result with single word (with isEnglishContinuousLatin):', result2)
		expect(result2).not.toBeUndefined()
	})
})
