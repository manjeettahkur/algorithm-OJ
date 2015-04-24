# README
CodeWars是一个新的OJ性质平台，更加注重Social化，以及对代码质量的讨论，当你回答出问题后，方可查看他人的代码，互相学习。

目录结构分类：
原则按照语言->难度等级分类。

## JS
这个目录中记录JS相关的代码。实现的语言为JavaScript或CoffeeScript。Codewars平台的运行环境说明: [Programming Languages & Environments](http://www.codewars.com/docs/programming-languages-and-environments)

## 关于测试框架Kata
Kata是Codewars提供的测试框架，也是支持多种语言的。类似Ruby下的RSpec和JavaScript下的JSmine.

### API
测试框架提供了一个Test单例对象，所有的方法都在这个对象下面，主要使用的有:

Pass/Fail methods:
- Test.expect(passed, msg)
- Test.assertEquals(actual, expected, msg)
- Test.assertNotEquals(actual, unexpected, msg)
- Test.assertSimilar(actual, expected, msg)
- Test.assertNotSimilar(actual, unexpected, msg)
- Test.expectError(msg, fn)
- Test.expectNoError(msg, fn)

Spec Methods:
- Test.describe(msg, fn)
- Test.it(msg, fn)
- Test.before(fn)

Helper Methods:
- Test.callCount(methodName) → Integer
- Test.inspect(object) → String
- Test.randomize(array) → Array
- Test.randomNumber() → Integer
- Test.randomToken() → String
- Test.sample(array) → object


[JavaScript/CoffeeScript Reference](http://www.codewars.com/docs/js-slash-coffeescript-test-reference)